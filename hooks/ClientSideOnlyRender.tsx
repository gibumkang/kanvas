const ClientSideOnlyRenderer = memo(function ClientSideOnlyRenderer({
    initialSsrDone = false,
    renderDone,
    renderLoading,
  }) {
    const [ssrDone, setSsrDone] = useState(initialSsrDone);
  
    useEffect(
      function afterMount() {
        setSsrDone(true);
      },
      [],
    );
  
    if (!ssrDone) {
      return renderLoading();
    }
  
    return renderDone();
  });